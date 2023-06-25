import Button from "@/components/buttons/button";
import TextInput from "@/components/inputs/text-input";
import Unauthorized from "@/components/layouts/unauthorized";

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
