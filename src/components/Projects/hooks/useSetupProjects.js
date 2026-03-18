import { useTranslation } from "react-i18next";
import one from "../../img/projetos/p1.webp";
import two from "../../img/projetos/p3.png";
import three from "../../img/projetos/p4.webp";
import four from "../../img/projetos/pj5.png";
import five from "../../img/projetos/pj6.png";
import six from "../../img/projetos/pj7.png";

const images = [one, two, three, four, five, six];

export function useSetupProjects() {
  const { t } = useTranslation();

  return images.map((image, index) => ({
    title: t(`Projects.Project${index + 1}.title`),
    description: t(`Projects.Project${index + 1}.description`),
    repoLink: t(`Projects.Project${index + 1}.repoLink`),
    siteLink: t(`Projects.Project${index + 1}.siteLink`),
    imageLink: t(`Projects.Project${index + 1}.imageLink`),
    image,
  }));
}
