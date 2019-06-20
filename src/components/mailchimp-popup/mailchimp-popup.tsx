import { Component, Prop, State, h } from "@stencil/core";

@Component({
  tag: "mailchimp-popup",
  styleUrl: "mailchimp-popup.styl"
})
export class MailchimpPopup {
  @Prop() visible: boolean = false;

  @Prop() headline: string = "Headline";
  @Prop() subheadline: string = "Subheadline subheadline subheadline";
  @Prop() onSubscribe: ({ email }) => void;

  @State() email: string;

  handleChange(event) {
    this.email = event.target.value;
  }

  render() {
    if (!this.visible) {
      return null;
    }
    return (
      <div class="mailchimp-popup overlay">
        <div class="mailchimp-popup wrapper">
          <div class="mailchimp-popup headline">{this.headline}</div>
          <div class="mailchimp-popup subheadline">{this.subheadline}</div>
          <form
            class="mailchimp-popup form"
            onSubmit={e => {
              e.preventDefault();
              this.onSubscribe({ email: this.email });
            }}
          >
            <input
              type="email"
              class="mailchimp-popup email"
              placeholder="Your Email"
              value={this.email}
              onInput={e => this.handleChange(e)}
            />
            <button class="mailchimp-popup button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
