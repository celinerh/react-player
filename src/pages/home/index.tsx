import useNewReleases from "../../hooks/useNewReleases";

function Home() {
  const { newReleases } = useNewReleases();
  console.log(newReleases);

  return <div></div>;
}

export default Home;
