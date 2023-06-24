import Button from "@/components/Buttons/button";
import TextInput from "@/components/Inputs/text-input";
import Unauthorized from "@/components/Layouts/unauthorized";

export default function Login() {
  const inputSpacer = 'mb-8'

  return (
    <Unauthorized>
      <form className="w-full">
        <TextInput placeholder="Email" type="email" name="email" className={inputSpacer} />
        <TextInput placeholder="Username" name="username" className={inputSpacer} />
        <TextInput placeholder="Password" type="password" name="password" className={inputSpacer} />
        <TextInput placeholder="Confirm password" type="password" name="confirm_password" className={inputSpacer} />
        <Button>
          Sign Up
        </Button>
      </form>
    </Unauthorized>
  );
}
