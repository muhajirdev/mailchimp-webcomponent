import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "mailchimp-popup",
  styleUrl: "mailchimp-popup.css"
})
export class MailchimpPopup {
  @Prop() visible: boolean;

  @Prop() headline: string = "Headline";
  @Prop() subheadline: string = "Subheadline subheadline subheadline";

  render() {
    return (
      <div class="mailchimp-popup overlay">
        <div class="mailchimp-popup wrapper">
          <div class="mailchimp-popup headline">{this.headline}</div>
          <div class="mailchimp-popup subheadline">{this.subheadline}</div>
          <form class="mailchimp-popup form">
            <input
              type="email"
              class="mailchimp-popup email"
              placeholder="Your Email"
            />
            <button class="mailchimp-popup button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
