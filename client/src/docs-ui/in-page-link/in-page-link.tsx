import {h, Component, Prop, Watch} from "@stencil/core";
import {headingIsVisible} from "../../utils/heading-is-visible";
import {pageContext} from "../page/page.context";
import {SelectedFilters} from "../page/page.types";

const STICKY_BAR_HEIGHT = 56;

@Component({tag: "docs-in-page-link", shadow: false})
export class DocsInPageLink {
  /*** the id of the element this link points to */
  @Prop() readonly targetId: string;
  /*** the selected filter state */
  @Prop() readonly selectedFilters: SelectedFilters;

  target?: HTMLElement;

  @Watch("selectedFilters")
  @Watch("target")
  componentDidRender() {
    if (this.targetId) {
      const targets = Array.from(
        document.querySelectorAll(`#${this.targetId}`),
      ).filter((e) => headingIsVisible(e)) as HTMLElement[];
      this.target = targets[0] || undefined;
    }
  }

  onClick = (e: Event) => {
    e.preventDefault();
    if (this.target) {
      const top = this.target.offsetTop - STICKY_BAR_HEIGHT;
      if (top !== window.scrollY) {
        // @ts-ignore
        window.scrollTo({top});
        history.replaceState(undefined, document.title, `#${this.targetId}`);
      }
    }
  };

  render() {
    return (
      <a onClick={this.onClick}>
        <slot />
      </a>
    );
  }
}

pageContext.injectProps(DocsInPageLink, ["selectedFilters"]);
