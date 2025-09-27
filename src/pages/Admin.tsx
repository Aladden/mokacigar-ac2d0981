import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useUserRole } from '@/hooks/useUserRole';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrandsManager } from '@/components/admin/BrandsManager';
import { CigarsManager } from '@/components/admin/CigarsManager';
import { UsersManager } from '@/components/admin/UsersManager';
import { Shield, Package, Cigarette, Users, LogOut, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Admin() {
  const { user, signOut, loading: authLoading } = useAuth();
  const { role, loading: roleLoading, isAdmin, canManageContent } = useUserRole();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: 'Error signing out',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      navigate('/');
    }
  };

  if (authLoading || roleLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  if (!canManageContent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <Shield className="h-12 w-12 mx-auto text-destructive" />
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access the admin panel.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/')} variant="outline">
              Return Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">MokaCigar Admin</h1>
              <p className="text-sm text-muted-foreground">
                Logged in as {user.email} ({role})
              </p>
            </div>
          </div>
          <Button onClick={handleSignOut} variant="outline" size="sm">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <Tabs defaultValue="brands" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="brands" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span>Brands</span>
            </TabsTrigger>
            <TabsTrigger value="cigars" className="flex items-center space-x-2">
              <Cigarette className="h-4 w-4" />
              <span>Cigars</span>
            </TabsTrigger>
            {isAdmin && (
              <TabsTrigger value="users" className="flex items-center space-x-2">
                <Users className="h-4 w-4" />
                <span>Users</span>
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="brands" className="mt-6">
            <BrandsManager />
          </TabsContent>

          <TabsContent value="cigars" className="mt-6">
            <CigarsManager />
          </TabsContent>

          {isAdmin && (
            <TabsContent value="users" className="mt-6">
              <UsersManager />
            </TabsContent>
          )}
        </Tabs>
      </main>
    </div>
  );
}