import  Home  from "../components/home/Home";
interface homeProps {
  setIsLoggedIn: (data: boolean) => void;
}
const HomePage: React.FC<homeProps> = ({ setIsLoggedIn }) => {
  return <Home setIsLoggedIn={setIsLoggedIn} />;
}
export default HomePage