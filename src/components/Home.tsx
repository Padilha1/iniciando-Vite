import { Div, GlobalStyle, Img, Section } from "../styles";


export function Home(){
    return (
            <Section>
                <GlobalStyle/>
                <div>
                    <Img src="../src/images/MobPsycho.jpg"/>
                    <Div>
                        <h4><b>Mob Psycho 100</b></h4>
                        <p>25 episodes | 2 seasons</p>
                    </Div>
                </div>
                <div>
                    <Img src="../src/images/OnePunch.jpg"/>
                    <Div>
                        <h4><b>One Punch Man</b></h4>
                        <p>12 episodes | 2 season</p>
                    </Div>
                </div>
                <div>
                    <Img src="../src/images/BluePeriod.jpg"/>
                    <Div>
                        <h4><b>Blue Period</b></h4>
                        <p>13 episodes | 1 season</p>
                    </Div>
                </div>
            </Section>   
    );
}