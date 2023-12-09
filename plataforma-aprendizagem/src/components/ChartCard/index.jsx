
import { MainContainer,TitleContainer,Title,Icon,InfoContainer,Label} from "./styles"

import Chart from "react-apexcharts";

function ChartCard({title,value,icon}) {
  return (
    <MainContainer>
        <TitleContainer>
            <Title>
               ENTREGAS (VALORES FAKES)
            </Title>
        </TitleContainer>
        <InfoContainer>
        <Chart
              height="150%" 
              width="100%" 
              options={{
                chart: {
                  type: 'bar',
                  height: "100%",
                  width: "100%",
                  fontFamily: 'Poppins, sans-serif',
                  textTransform: "uppercase",
                },
                plotOptions: {
                  bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    endingShape: 'rounded'
                  },
                },
                dataLabels: {
                  enabled: false
                },
                grid: {
                  show: false
                },
                yaxis: {
                  show: false 
                },
                stroke: {
                  show: false,
                  width: 2,
                  colors: ['transparent']
                },
                xaxis: {
                  categories: ['Sab', 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex'],
                  labels: {
                    style: {
                      fontFamily: 'Poppins, sans-serif',
                      textTransform: "uppercase",
                    },
                  },
                  axisTicks: {show: false}
                },
                fill: {
                  opacity: 1
                },
                tooltip: {
                  y: {
                    formatter: function (val) {
                      return val
                    }
                  }
                }
              }}
              series={[{
                name: 'Cursos',
                data: [44,50,65,32,12,11,1]
              }]}
              type="bar"
            />
        </InfoContainer>
    </MainContainer>
  )
}

export default ChartCard
