import { HomePage } from "@pages/home";
import { Providers } from "./providers";

export const App = () => {
  return (
    <Providers>
      <HomePage />
    </Providers>
  );
};
