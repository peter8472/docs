import {Component, h, Host} from "@stencil/core";
import {
  platformsGroupStyle,
  platformIcon,
  buttonStyle,
} from "./landing-hero-cta.style";

@Component({tag: "docs-landing-hero-cta", shadow: false})
export class DocsLandingHeroCTA {
  render() {
    return (
      <Host>
        <docs-internal-link class={buttonStyle} href="/start">
          Get Started
        </docs-internal-link>
        <div class={platformsGroupStyle}>
          <docs-internal-link
            href="/start?integration=js"
            class="scale-up-on-hover"
          >
            <img
              class={platformIcon}
              src="/assets/integrations/js.svg"
              alt="JS Icon"
            />
          </docs-internal-link>
          <docs-internal-link
            href="/start?integration=ios"
            class="scale-up-on-hover"
          >
            <img
              class={platformIcon}
              src="/assets/integrations/ios.svg"
              alt="iOS Icon"
            />
          </docs-internal-link>
          <docs-internal-link
            href="/start?integration=android"
            class="scale-up-on-hover"
          >
            <img
              class={platformIcon}
              src="/assets/integrations/android.svg"
              alt="Android Icon"
            />
          </docs-internal-link>
        </div>
      </Host>
    );
  }
}
