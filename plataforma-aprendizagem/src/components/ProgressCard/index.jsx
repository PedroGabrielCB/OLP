
import { MainContainer,TitleContainer,Title,InfoContainer,Value} from "./styles"
import Chart from "react-apexcharts";

function ProgressCard() {
  return (
    <MainContainer>
        <TitleContainer>
            <Title>
                PROGRESSO - (VALORES FAKES)  
            </Title>
        </TitleContainer>
        <InfoContainer>
        <Chart
              options={{
                chart: {
                    height: 350,
                    type: "radialBar"
                },
                plotOptions: {
                    bar: {
                        
                        columnWidth: '10%',
                    },
                    radialBar: {
                        hollow: {
                            size: "70%"
                        },
                        dataLabels: {
                            total: {
                                show: true,
                                label: "Total",
    
                            }
                        }
                    }
                },
                labels: ["Cursos","Trilhas"]
              }}
              series={[80,45]}
              type="radialBar"

            />
        </InfoContainer>
    </MainContainer>
  )
}

export default ProgressCard
