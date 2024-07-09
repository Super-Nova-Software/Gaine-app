"use client";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useModal } from '@/hooks/use-modal-store';
import { CreateServerRoleSchema } from '@/schemas';
import { toast } from 'sonner'; // Ensure 'sonner' is correctly imported and configured
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { createServerRole } from '@/app/actions/server';

export const CreateServerRoleModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const isModalOpen = isOpen && type === 'createServerRole';
  const { server, permissions } = data;

  const form = useForm({
    resolver: zodResolver(CreateServerRoleSchema),
    defaultValues: {
      name: '',
      color: '',
      permissions: [],
      hoist: false,
      mentionable: true,
      serverId: server?.id,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof CreateServerRoleSchema>) => {
    try {
      toast.promise(
        createServerRole(values),
        {
          loading: 'Creating a new role...',
          success: `Role ${values.name} created successfully!`,
          error: 'Failed to create a role.',
        }
      );
      form.reset();
      onClose(); 
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error('An unexpected error occurred. Please try again later.');
    }
  };

  const handleClose = () => {
    form.reset();
    onClose(); // Reset form and close the modal
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="dark:bg-[#1E1F22] bg-white p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create a New Server Role
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold">
                      Role Name
                    </FormLabel>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter role name"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold">
                      Role Color
                    </FormLabel>
                    <Input
                      disabled={isLoading}
                      className="bg-zinc-300/50 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      placeholder="Enter role color"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="permissions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold">
                      Permissions
                    </FormLabel>
                    <div className="grid grid-cols-2 gap-2">
                      {permissions?.map((permission) => (
                        <div key={permission.id} className="flex items-center space-x-2">
                          <Checkbox
                            disabled={isLoading}
                            checked={field.value.includes(permission.id)}
                            onCheckedChange={(checked: boolean) => {
                              const newPermissions = checked
                                ? [...field.value, permission.id]
                                : field.value.filter((id: string) => id !== permission.id);
                              field.onChange(newPermissions);
                            }}
                          />
                          <Label className="text-sm">{permission.name}</Label>
                        </div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-2">
                <FormField
                  control={form.control}
                  name="hoist"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        disabled={isLoading}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="hoist" className="text-sm">Hoist</Label>
                    </div>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mentionable"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        disabled={isLoading}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <Label htmlFor="mentionable" className="text-sm">Mentionable</Label>
                    </div>
                  )}
                />
              </div>
            </div>
            <DialogFooter className="dark:bg-[rgb(43,45,49)] bg-gray-100 px-6 py-4">
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? 'Creating...' : 'Create'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
