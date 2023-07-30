import {Profile} from "@/types/common";
import Image from "next/image";

type Props = {
  data: Profile
}

const SectionProfile = ({data}: Props) => {
  return(
      <section className={'h-screen bg-waving'}>
        <div className={'h-full w-full flex items-center justify-center'}>
          <div className={'grid'}>
            <div>
              {/*<Image*/}
              {/*  src={}*/}
              {/*/>*/}
            </div>
            <div></div>
          </div>
        </div>
      </section>
  )
}
export default SectionProfile