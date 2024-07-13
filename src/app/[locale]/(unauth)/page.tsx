import { getTranslations } from "next-intl/server";
// import { Sponsors } from '@/components/Sponsors';
import { AnnounceBlock } from "@/components/AnnounceBlock";
import { ChooseRoom } from "@/components/ChooseRoom";
import { Highlight } from "@/components/Highlight";
import { ImageCard } from "@/components/ImageCard";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
  };
}

export default function Index() {
  return (
    <>
      <div className="mx-auto w-3/4 ">
        <ChooseRoom />
        <AnnounceBlock />
        <Highlight />
        <ImageCard />
      </div>
    </>
  );
}
