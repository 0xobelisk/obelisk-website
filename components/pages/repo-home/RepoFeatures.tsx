import { REPO_HOME_FEATURES } from "../../../content/features";
import { FadeIn } from "../home-shared/FadeIn";
import { FeaturesBento } from "../home-shared/FeaturesBento";

export function RepoFeatures() {
  return (
    <FadeIn className="py-16 md:py-24 lg:py-32">
      <FeaturesBento
        header="Why Obelisk?"
        body="Obelisk reimagines build system techniques used by Move and Rust to remove maintenance burden and overhead."
        features={REPO_HOME_FEATURES}
      />
    </FadeIn>
  );
}
