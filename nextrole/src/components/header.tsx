import { useAuth } from "@clerk/clerk-react"
import {cn} from "@/lib/utils"
import { Container } from "./container";
import { LogoContainer } from "./logo-container";

const Header = () => {
  const {userId}=useAuth();
  return (
    <header className={cn("w-full border-b duration-150 transition-all ease-in-out")}>

      <Container>
        <div className="flex items-center gap-4 w-full">

          {/*Logo section*/}
          <LogoContainer/>

          {/*Navigation  section*/}

          {/*profile section*/}

        </div>
      </Container>

    </header>
  )
}

export default Header
