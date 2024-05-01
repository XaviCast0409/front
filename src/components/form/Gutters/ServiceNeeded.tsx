import CardForm from "../../../utils/CardForm";
import { Link } from "react-router-dom";
import BackButtonArrow from "../../../utils/BackButtonArrow";

export default function ServiceNeededForm() {
  return (
    <form className={"container_form".replace(/\s+/g, " ").trim()}>
      <h2 className={"h2".replace(/\s+/g, " ").trim()}>
        Which of these best describe your needs?
      </h2>

      {/* Directly render each CardForm with its specific title and link */}
      <CardForm key="Replace Bathtub or Shower" title="">
        <Link to="/">
          <h5 className="h5_form">Install a New Gutter System</h5>
        </Link>
      </CardForm>

      <CardForm key="" title="">
        <Link to="/">
          {/* Assuming you want to include h5 for each card */}
          <h5 className="h5_form">Repair An Existing Gutter System </h5>
        </Link>
      </CardForm>

      <CardForm key="New Walk-In-Tub" title="">
        <Link to="/">
          <h5 className="h5_form">Install New Gutter Covers</h5>
        </Link>
      </CardForm>
      <BackButtonArrow />
    </form>
  );
}
