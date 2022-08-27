import dynamic from "next/dynamic";

const DynamicArjs = dynamic(() => import("../../components/Ar"), {
  ssr: false,
});

function TestAr({ scene }) {
  return (
    <div style={{ width: "auto", height: "auto" }}>
      <DynamicArjs nftUrl={`/nfts/${scene}`} model='/glb/women.glb' />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  return { props: { scene: query.s || "test-no1" } };
};

export default TestAr;
