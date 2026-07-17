import { useTranslation } from "react-i18next";
import foodbox from "../../img/projetos/p4.webp";
import takusan from "../../img/projetos/pj7.png";
import oficina from "../../img/projetos/workshop.jpeg";
import sentinel from "../../img/projetos/sentinel.png";

const images = [foodbox, takusan, oficina, sentinel];

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
