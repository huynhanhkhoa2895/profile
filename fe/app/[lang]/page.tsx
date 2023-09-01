import SectionProfile from '@/components/organisms/SectionProfile';

type PageProps = {
  profile?: any;
};

export default async function Home() {
  const rs: PageProps = await getProfile();
  return (
    <main>
      <SectionProfile data={rs.profile} />
    </main>
  );
}

const getProfile = async (): Promise<PageProps> => {
  const token = process.env.BE_TOKEN;
  const url = process.env.BE_URL_API;
  const headers = {
    Authorization: 'Bearer ' + token,
  };
  const rsProfile = await fetch(
    url +
      '/profile?populate[cv][populate]=*&populate[technology_proficient][populate]=*&populate[technology_knowledge][populate]=*&populate[image][populate]=*',
    {
      headers,
      cache: 'no-cache',
    },
  ).then((res: Response) => res.json());
  const profile: any = {};
  console.log('test', {
    ...rsProfile?.data?.attributes,
  });
  Object.keys({
    ...rsProfile?.data?.attributes,
  }).map((item: string) => {
    if (item === 'technology_proficient' || item === 'technology_knowledge') {
      const attrTech = rsProfile?.data?.attributes[item].data || null;
      if (attrTech) {
        profile[item] = attrTech.map((tech: any) => ({
          ...tech.attributes,
          ...{
            image: tech?.attributes?.image?.data?.attributes,
          },
        }));
      }
    } else if (item === 'cv' || item === 'image') {
      const attrFile = rsProfile?.data?.attributes[item].data || null;
      const file: any = {};
      if (attrFile) {
        for (const keyFile of Object.keys(attrFile?.attributes)) {
          file[keyFile] = attrFile?.attributes[keyFile];
        }
        profile[item] = file;
      } else {
        profile[item] = null;
      }
    } else {
      profile[item] = rsProfile?.data?.attributes[item];
    }
  });
  return {
    profile: profile || null,
  };
};
