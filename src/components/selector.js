import { useValue } from "../buttonContext"
import styles from "./selector.module.css"

export default function Select(){
  const { setPos } = useValue();
  const handleSelectChange = (e) => {
    setPos(e.target.value);
  };
  return(
    // dropdown for hover
    <div className={styles.divs}>
      <select className={styles.select} onChange={handleSelectChange}>
        <option value="Top">Top</option>
        <option value="Right">Right</option>
        <option value="Bottom">Bottom</option>
        <option value="Left">Left</option>
      </select>
    </div>
  );
}