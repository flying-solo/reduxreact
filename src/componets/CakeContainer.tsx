import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props: any) {
  return (
    <div>
      <h2>(without hooks) No. of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
