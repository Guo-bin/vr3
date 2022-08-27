import dynamic from "next/dynamic";
import ArPageComponent from "components/ArPage";
const DynamicArjs = dynamic(() => import("../../components/Ar"), {
  ssr: false,
});

function TestAr({ scene }) {
  return (
    <div>
      <DynamicArjs nftUrl={`/nfts/${scene}`} model='/glb/women.glb' />
      <ArPageComponent />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { scene: query.s || "test-no1" } };
};

export default TestAr;
