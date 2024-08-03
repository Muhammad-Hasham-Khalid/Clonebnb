import { Container } from "../shared/container";
import { Logo } from "./logo";
import { Search } from "./search";
import { UserMenu } from "./user-menu";

export function Navbar() {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b py-4">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
}
