import Button from "@/components/Buttons/button";
import TextInput from "@/components/Inputs/text-input";
import Unauthorized from "@/components/Layouts/unauthorized";

export default function Login() {
  return (
    <Unauthorized>
      <form className="w-full">
        <TextInput placeholder="Email" type="email" name="email" className="mb-8" />
        <TextInput placeholder="Password" type="password" name="password" className="mb-8" />
        <Button>
          Log In
        </Button>
      </form>
    </Unauthorized>
  );
}
