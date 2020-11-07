import React,{Component} from "react";
import { Pie } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";


class ChartsPage extends Component {
  state = {
    dataPie: {
      datasets: [
        {
          data: [200, 50, 100, 40, 120],
          backgroundColor: [
            "#F7464A",
            "#46BFBD",
            "#FDB45C",
            "#949FB1",
            "#4D5360",
            "#AC64AD"
          ],
          hoverBackgroundColor: [
            "#FF5A5E",
            "#5AD3D1",
            "#FFC870",
            "#A8B3C5",
            "#616774",
            "#DA92DB"
          ]
        }
      ]
    }
  }

  render() {
    return (
      <div className="pie">
      <MDBContainer>
        <h3 className="mt-1">Pie chart</h3>
        <Pie  data={this.state.dataPie} options={{ responsive: true }} />
      </MDBContainer>
      </div>
    );
  }
}

export default ChartsPage;