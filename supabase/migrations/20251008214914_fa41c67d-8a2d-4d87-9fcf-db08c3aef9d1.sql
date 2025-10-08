-- Fix critical email exposure by restricting profile access
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Allow users to view only their own profile
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Allow admins to view all profiles (needed for UsersManager)
CREATE POLICY "Admins can view all profiles"
ON public.profiles
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));