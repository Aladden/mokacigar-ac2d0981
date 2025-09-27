import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  logo_url: string | null;
  description: string | null;
  heritage: string | null;
  country: string | null;
  founded: number | null;
  strength: string | null;
  flavour_profile: string | null;
  created_at: string;
}

export function BrandsManager() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    logo_url: '',
    description: '',
    heritage: '',
    country: '',
    founded: '',
    strength: '',
    flavour_profile: '',
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    try {
      const { data, error } = await supabase
        .from('brands')
        .select('*')
        .order('name');

      if (error) throw error;
      setBrands(data || []);
    } catch (error) {
      console.error('Error fetching brands:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch brands',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const brandData = {
        name: formData.name,
        logo_url: formData.logo_url || null,
        description: formData.description || null,
        heritage: formData.heritage || null,
        country: formData.country || null,
        founded: formData.founded ? parseInt(formData.founded) : null,
        strength: formData.strength || null,
        flavour_profile: formData.flavour_profile || null,
      };

      if (editingBrand) {
        const { error } = await supabase
          .from('brands')
          .update(brandData)
          .eq('id', editingBrand.id);

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Brand updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('brands')
          .insert([brandData]);

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Brand created successfully',
        });
      }

      setDialogOpen(false);
      setEditingBrand(null);
      resetForm();
      fetchBrands();
    } catch (error) {
      console.error('Error saving brand:', error);
      toast({
        title: 'Error',
        description: 'Failed to save brand',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this brand?')) return;

    try {
      const { error } = await supabase
        .from('brands')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Brand deleted successfully',
      });
      
      fetchBrands();
    } catch (error) {
      console.error('Error deleting brand:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete brand',
        variant: 'destructive',
      });
    }
  };

  const handleEdit = (brand: Brand) => {
    setEditingBrand(brand);
    setFormData({
      name: brand.name,
      logo_url: brand.logo_url || '',
      description: brand.description || '',
      heritage: brand.heritage || '',
      country: brand.country || '',
      founded: brand.founded?.toString() || '',
      strength: brand.strength || '',
      flavour_profile: brand.flavour_profile || '',
    });
    setDialogOpen(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      logo_url: '',
      description: '',
      heritage: '',
      country: '',
      founded: '',
      strength: '',
      flavour_profile: '',
    });
  };

  const handleNewBrand = () => {
    setEditingBrand(null);
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
              <CardTitle>Brands Management</CardTitle>
              <CardDescription>
                Manage cigar brands and their information
              </CardDescription>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button onClick={handleNewBrand}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Brand
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>
                    {editingBrand ? 'Edit Brand' : 'Add New Brand'}
                  </DialogTitle>
                  <DialogDescription>
                    Fill in the brand information below
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
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="founded">Founded Year</Label>
                      <Input
                        id="founded"
                        type="number"
                        value={formData.founded}
                        onChange={(e) => setFormData(prev => ({ ...prev, founded: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="strength">Strength</Label>
                      <Input
                        id="strength"
                        value={formData.strength}
                        onChange={(e) => setFormData(prev => ({ ...prev, strength: e.target.value }))}
                        placeholder="e.g., Light, Medium, Full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="logo_url">Logo URL</Label>
                    <Input
                      id="logo_url"
                      type="url"
                      value={formData.logo_url}
                      onChange={(e) => setFormData(prev => ({ ...prev, logo_url: e.target.value }))}
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
                    <Label htmlFor="flavour_profile">Flavour Profile</Label>
                    <Textarea
                      id="flavour_profile"
                      value={formData.flavour_profile}
                      onChange={(e) => setFormData(prev => ({ ...prev, flavour_profile: e.target.value }))}
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="heritage">Heritage</Label>
                    <Textarea
                      id="heritage"
                      value={formData.heritage}
                      onChange={(e) => setFormData(prev => ({ ...prev, heritage: e.target.value }))}
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingBrand ? 'Update' : 'Create'} Brand
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
                <TableHead>Country</TableHead>
                <TableHead>Founded</TableHead>
                <TableHead>Strength</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {brands.map((brand) => (
                <TableRow key={brand.id}>
                  <TableCell className="font-medium">{brand.name}</TableCell>
                  <TableCell>{brand.country}</TableCell>
                  <TableCell>{brand.founded}</TableCell>
                  <TableCell>{brand.strength}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(brand)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(brand.id)}
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