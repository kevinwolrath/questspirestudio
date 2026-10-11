import { featureAreas } from "../content/features";

export function FeatureSheets() {
  return (
    <figure className="preview">
      <ul className="sheets">
        {featureAreas.map((feature) => (
          <li key={feature.title}>
            <div className="sheet">
              <p className="sheet__flag">Preview</p>
              <p className="sheet__title">{feature.title}</p>
              <div className="sheet__lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <figcaption className="preview__caption">
        Illustrated preview. Approved QuestForge screenshots are not included yet.
      </figcaption>
    </figure>
  );
}
