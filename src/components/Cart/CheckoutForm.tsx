import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import api from "@/utils/api";
// import { useCart } from "@/store/cart/hooks";

const FORM_ID = "251073677545968";

const formSchema = z.object({
  fullname: z.string().min(3, "Fullname must be at least 3 characters."),
  address: z.string().min(10, "Address must be at least 10 characters."),
});

type FormData = z.infer<typeof formSchema>;

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  //   const cart = useCart();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await api.put(
        `https://api.jotform.com/form/${FORM_ID}/submissions`,
        null,
        {
          params: {},
        }
      );

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Checkout completed successfully!");
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full  bg-white rounded-xl space-y-4"
    >
      <div>
        <Label htmlFor="fullname">Full Name</Label>
        <Input id="fullname" {...register("fullname")} />
        {errors.fullname && (
          <p className="text-sm text-red-500 mt-3">{errors.fullname.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" {...register("address")} />
        {errors.address && (
          <p className="text-sm text-red-500 mt-3">{errors.address.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Processing..." : "Submit Order"}
      </Button>
    </form>
  );
};

export default CheckoutForm;
