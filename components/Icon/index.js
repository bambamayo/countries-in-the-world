import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Icon({ classname, type }) {
  return <FontAwesomeIcon className={classname} icon={type} />;
}
