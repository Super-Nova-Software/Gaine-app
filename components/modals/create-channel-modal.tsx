"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { gql, useMutation } from "@apollo/client";
// import { ChannelCategoryType } from "@/gql/graphql";


const formSchema = z.object({
  name: z.string().min(1, {
    message: "Channel name is required.",
  }).refine((name) => name !== "general", {
    message: "Channel name cannot be 'general'",
  }),
  type: z.string().nullable(),
});



const ADD_CHANNEL = gql`
  mutation AddChannel($name: String!, $serverId: Int!, $categoryId: Int) {
    createChannel(name: $name, serverId: $serverId, categoryId: $categoryId) {
      channel {
        id
        name
        server {
          id
          name
        }
        category {
          id
          name
        }
      }
    }
  }
`;


export const CreateChannelModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const router = useRouter();
  const [createChannel, { loading }] = useMutation(ADD_CHANNEL);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    });
  const isModalOpen = isOpen && type === "createChannel";
  const { ChannelCategoryType } = data;
 
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      type: "text",
    }
  });


  const isLoading = form.formState.isSubmitting;

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   try {
  //     const url = qs.stringifyUrl({
  //       url: "/api/channels",
  //       query: {
  //         serverId: params?.serverId
  //       }
  //     });
  //     await axios.post(url, values);

  //     form.reset();
  //     router.refresh();
  //     onClose();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const { data: { createChannel: createdChannel } } = await createChannel({
        variables: {
          input: {
            name: data.name,
            category: data.type,
          }
        }
      });
      console.log("Created channel:", createdChannel);
      router.refresh(); // Refresh the page or navigate to the updated channel list
      onClose();
    } catch (error) {
      console.error("Error creating channel:", error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Create Channel
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8 px-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel
                      className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70"
                    >
                      Channel name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
                        placeholder="Enter channel name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Channel Type</FormLabel>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                    >
                      <FormControl>
                        <SelectTrigger
                          className="bg-zinc-300/50 border-0 focus:ring-0 text-black ring-offset-0 focus:ring-offset-0 capitalize outline-none"
                        >
                          <SelectValue placeholder="Select a channel type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {/* {Object.values(ChannelCategoryType).map((type) => (
                          <SelectItem
                            key={type}
                            value={type}
                            className="capitalize"
                          >
                            {type.toLowerCase()}
                          </SelectItem>
                        ))} */}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="bg-gray-100 px-6 py-4">
              <Button variant="primary" disabled={isLoading}>
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}