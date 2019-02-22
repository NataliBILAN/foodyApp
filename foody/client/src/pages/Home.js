import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../ui/PageTitle';

const HomePage = () => (
  <HomeContentWrap>
    <PageTitle>Doughnut Fun Facts</PageTitle>
    <HomeContent>
      The internet is full of fabulous facts about everything from current
      events to the history basket weaving and doughnut fun facts. As we
      research for our daily content on food trucks, food carts and street food,
      we stumble upon some items of knowledge that we just did not know. We have
      decided when these fun facts pop up, that we would share them with our
      readers in our section titled “Did You Know?” For today’s Did You Know we
      will look at Doughnut fun facts. Doughnut Fun Facts: While no one really
      knows when doughnuts were invented or who invented them, doughnuts were
      originally made as a long twist of dough. Not in the ring form that is
      most common these days. It was also common in England for donuts to be
      made in a ball shape and injected with Jam after they were cooked. Both
      methods of cooking involve no human intervention as the ball and twist
      will turn itself over when the underside is cooked. American Hansen
      Gregory claimed to have invented it in 1847 when he was traveling on a
      steam boat. He was not satisfied with the texture of the center of the
      donut so he pressed a hole in the center with the ship’s pepper box.
      Doughnuts vs. Donuts? “Doughnut” is actually proper, but “donut” is
      acceptable. If you look in older dictionaries, you’ll only find
      “doughnut.” However, the Merriam-Webster dictionary now lists “donut” as a
      variant of “doughnut.” January 12th is National Glazed Doughnut Day. The
      first Friday in June and November 5th are National Doughnut Day. June 8th
      is National Jelly Filled Doughnut Day. September 14th is National
      Creme-Filled Doughnut Day. National Doughnut Day was officially
      established in 1938 by the Chicago Salvation Army to raise much-needed
      funds during the Great Depression. In the U.S. alone, more than 10 billion
      doughnuts are made every year. The largest doughnut ever made was an
      American-style jelly donut weighing 1.7 tons, which was 16 feet in
      diameter and 16 inches high in the center. Per capita, Canada has more
      doughnut shops than any other country. Adolph Levitt invented the first
      doughnut machine in 1920. The US doughnut industry is worth 3.6 billion
      dollars. The Guinness World record for doughnut eating is held by John
      Haight, who consumed 29 donuts in just over 6 minutes.
    </HomeContent>
  </HomeContentWrap>
);

const HomeContentWrap = styled.div`
  width: 80%;
  margin: 200px auto 0;
`;

const HomeContent = styled.p`
  line-height: 1.5;
`;

export default HomePage;
