import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
}

interface Cigar {
  id: string;
  name: string;
  brand_id: string;
  vitola: string | null;
  length_mm: number | null;
  ring_gauge: number | null;
  smoking_time: string | null;
  flavour_profile: string | null;
  strength: string | null;
  description: string | null;
  heritage: string | null;
  image_url: string | null;
  pairings: any;
  brands?: { name: string };
}

export function CigarsManager() {
  const [cigars, setCigars] = useState<Cigar[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCigar, setEditingCigar] = useState<Cigar | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    brand_id: '',
    vitola: '',
    length_mm: '',
    ring_gauge: '',
    smoking_time: '',
    flavour_profile: '',
    strength: '',
    description: '',
    heritage: '',
    image_url: '',
    pairings: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [cigarsRes, brandsRes] = await Promise.all([
        supabase
          .from('cigars')
          .select(`
            *,
            brands (name)
          `)
          .order('name'),
        supabase
          .from('brands')
          .select('id, name')
          .order('name')
      ]);

      if (cigarsRes.error) throw cigarsRes.error;
      if (brandsRes.error) throw brandsRes.error;

      setCigars(cigarsRes.data || []);
      setBrands(brandsRes.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch data',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      let pairings = null;
      if (formData.pairings) {
        try {
          pairings = JSON.parse(formData.pairings);
        } catch {
          toast({
            title: 'Error',
            description: 'Invalid JSON format for pairings',
            variant: 'destructive',
          });
          return;
        }
      }

      const cigarData = {
        name: formData.name,
        brand_id: formData.brand_id,
        vitola: formData.vitola || null,
        length_mm: formData.length_mm ? parseInt(formData.length_mm) : null,
        ring_gauge: formData.ring_gauge ? parseInt(formData.ring_gauge) : null,
        smoking_time: formData.smoking_time || null,
        flavour_profile: formData.flavour_profile || null,
        strength: formData.strength || null,
        description: formData.description || null,
        heritage: formData.heritage || null,
        image_url: formData.image_url || null,
        pairings,
      };

      if (editingCigar) {
        const { error } = await supabase
          .from('cigars')
          .update(cigarData)
          .eq('id', editingCigar.id);

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Cigar updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('cigars')
          .insert([cigarData]);

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Cigar created successfully',
        });
      }

      setDialogOpen(false);
      setEditingCigar(null);
      resetForm();
      fetchData();
    } catch (error) {
      console.error('Error saving cigar:', error);
      toast({
        title: 'Error',
        description: 'Failed to save cigar',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this cigar?')) return;

    try {
      const { error } = await supabase
        .from('cigars')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Cigar deleted successfully',
      });
      
      fetchData();
    } catch (error) {
      console.error('Error deleting cigar:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete cigar',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (cigar: Cigar) => {
    setEditingCigar(cigar);
    setFormData({
      name: cigar.name,
      brand_id: cigar.brand_id,
      vitola: cigar.vitola || '',
      length_mm: cigar.length_mm?.toString() || '',
      ring_gauge: cigar.ring_gauge?.toString() || '',
      smoking_time: cigar.smoking_time || '',
      flavour_profile: cigar.flavour_profile || '',
      strength: cigar.strength || '',
      description: cigar.description || '',
      heritage: cigar.heritage || '',
      image_url: cigar.image_url || '',
      pairings: cigar.pairings ? JSON.stringify(cigar.pairings, null, 2) : '',
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      brand_id: '',
      vitola: '',
      length_mm: '',
      ring_gauge: '',
      smoking_time: '',
      flavour_profile: '',
      strength: '',
      description: '',
      heritage: '',
      image_url: '',
      pairings: '',
    });
  };

  const handleNewCigar = () => {
    setEditingCigar(null);
    resetForm();
    setDialogOpen(true);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Cigars Management</CardTitle>
              <CardDescription>
                Manage individual cigars and their specifications
              </CardDescription>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleNewCigar}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Cigar
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingCigar ? 'Edit Cigar' : 'Add New Cigar'}
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the cigar information below
                  </DialogDescription>
                </DialogHeader>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brand_id">Brand *</Label>
                      <Select value={formData.brand_id} onValueChange={(value) => setFormData(prev => ({ ...prev, brand_id: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a brand" />
                        </SelectTrigger>
                        <SelectContent>
                          {brands.map((brand) => (
                            <SelectItem key={brand.id} value={brand.id}>
                              {brand.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vitola">Vitola</Label>
                      <Input
                        id="vitola"
                        value={formData.vitola}
                        onChange={(e) => setFormData(prev => ({ ...prev, vitola: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="length_mm">Length (mm)</Label>
                      <Input
                        id="length_mm"
                        type="number"
                        value={formData.length_mm}
                        onChange={(e) => setFormData(prev => ({ ...prev, length_mm: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ring_gauge">Ring Gauge</Label>
                      <Input
                        id="ring_gauge"
                        type="number"
                        value={formData.ring_gauge}
                        onChange={(e) => setFormData(prev => ({ ...prev, ring_gauge: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="smoking_time">Smoking Time</Label>
                      <Input
                        id="smoking_time"
                        value={formData.smoking_time}
                        onChange={(e) => setFormData(prev => ({ ...prev, smoking_time: e.target.value }))}
                        placeholder="e.g., 45-60 minutes"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="strength">Strength</Label>
                      <Select value={formData.strength} onValueChange={(value) => setFormData(prev => ({ ...prev, strength: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select strength" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Light">Light</SelectItem>
                          <SelectItem value="Light to Medium">Light to Medium</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Medium to Full">Medium to Full</SelectItem>
                          <SelectItem value="Full">Full</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flavour_profile">Flavour Profile</Label>
                      <Select value={formData.flavour_profile} onValueChange={(value) => setFormData(prev => ({ ...prev, flavour_profile: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select profile" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Light">Light</SelectItem>
                          <SelectItem value="Light to Medium">Light to Medium</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Medium to Full">Medium to Full</SelectItem>
                          <SelectItem value="Full">Full</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image_url">Image URL</Label>
                    <Input
                      id="image_url"
                      type="url"
                      value={formData.image_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heritage">Heritage</Label>
                    <Textarea
                      id="heritage"
                      value={formData.heritage}
                      onChange={(e) => setFormData(prev => ({ ...prev, heritage: e.target.value }))}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pairings">Pairings (JSON format)</Label>
                    <Textarea
                      id="pairings"
                      value={formData.pairings}
                      onChange={(e) => setFormData(prev => ({ ...prev, pairings: e.target.value }))}
                      rows={4}
                      placeholder='{"spirits": ["Whiskey", "Rum"], "wine": ["Red Wine"], "coffee": ["Espresso"]}'
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingCigar ? 'Update' : 'Create'} Cigar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Vitola</TableHead>
                <TableHead>Length</TableHead>
                <TableHead>Ring Gauge</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cigars.map((cigar) => (
                <TableRow key={cigar.id}>
                  <TableCell className="font-medium">{cigar.name}</TableCell>
                  <TableCell>{cigar.brands?.name}</TableCell>
                  <TableCell>{cigar.vitola}</TableCell>
                  <TableCell>{cigar.length_mm}mm</TableCell>
                  <TableCell>{cigar.ring_gauge}</TableCell>
                  <TableCell>{cigar.strength}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(cigar)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(cigar.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}