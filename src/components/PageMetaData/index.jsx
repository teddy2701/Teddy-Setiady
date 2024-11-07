// components/PageMetadata.js
import { getTranslations } from "next-intl/server";

export default async function PageMetadata(page) {
  const t = await getTranslations(page);

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}
