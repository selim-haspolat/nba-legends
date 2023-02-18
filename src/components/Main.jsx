import nbaBg from "./../assets/nba-6.svg";
import data from "./../helper/data";
import Card from "./Card";

const Main = ({ search }) => {
  return (
    <div
      className="container h-full bg-contain mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 rounded-md min-h-[400px]"
      style={{ backgroundImage: `url(${nbaBg})` }}
    >
      {data.map(({ name, img, statistics }) => {
        if (
          search.trim() !== "" &&
          name.toLowerCase().startsWith(search.toLowerCase())
        ) {
          return (
            <Card key={name} name={name} img={img} statistics={statistics} />
            );
        }
        else if(search.trim() === ''){
            return <Card key={name} name={name} img={img} statistics={statistics} />
        }
      })}
    </div>
  );
};

export default Main;
