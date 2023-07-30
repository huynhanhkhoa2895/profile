import Image from 'next/image'
import SectionProfile from "@/components/organisms/SectionProfile";
import {Profile} from "@/types/common";

type PageProps = {
  profile?: any
}

export default async function Home() {
  const rs : PageProps = await getProfile();
  return (
      <main>
        <SectionProfile data={rs.profile} />
      </main>

  )
}

const getProfile = async () : Promise<PageProps> => {
  const token = process.env.BE_TOKEN
  const url = process.env.BE_URL_API
  const headers = {
    'Authorization': 'Bearer '+token
  }
  const rsProfile = await fetch(url+'/profile?populate=*',{
    headers
  }).then(((res: Response)=>res.json()));
  const profile = {};
  Object.keys(rsProfile?.data?.attributes).map((item: string)=>{
    if(item === 'cv' || item === 'image' ){
      const attrFile = rsProfile?.data?.attributes[item].data || null;
      const file = {};
      if(attrFile) {
        for(const keyFile of Object.keys(attrFile?.attributes)) {
          file[keyFile] = attrFile?.attributes[keyFile]
        }
        profile[item] = file
      }else{
        profile[item] = null
      }

    }else{
      profile[item] = rsProfile?.data?.attributes[item]
    }
  })
  return {
    profile : profile || null
  }
}