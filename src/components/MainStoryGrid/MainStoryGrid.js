import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';
import {QUERIES} from "../../constants"
import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';


const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index, array) => (
            <StoryWrapper key={story.id}>
              <SecondaryStory key={story.id} {...story} />
            </StoryWrapper>
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <OpinionStoryList>
          {OPINION_STORIES.map((story, index) => (
            <StoryOpinionWrapper key={story.id}>
              <OpinionStory {...story} />
            </StoryOpinionWrapper>
          ))}
        </OpinionStoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px;
  margin-bottom: 48px;
  @media ${QUERIES.tabletAndUp}{
    grid-template-areas:
    'main-story secondary-stories'
    'advertisement advertisement'
    'opinion-stories opinion-stories';
    grid-template-columns: 2fr 1fr;
    gap:48px 16px;
  }
  @media ${QUERIES.laptopAndUp}{
    grid-template-areas:
    'main-story secondary-stories opinion-stories'
    'main-story advertisement advertisement';
    grid-template-columns: 2.5fr 2fr 1fr;
    gap:16px 16px;
  }
`;

const MainStorySection = styled.section`
  grid-area: main-story;
  @media ${QUERIES.tabletAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;


const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;
  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
  }
`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  &:first-of-type{
    @media ${QUERIES.tabletAndUp}{
      height:100%;
    }
  }
`;

const StoryWrapper = styled.div`
  &:not(:last-of-type){
    border-bottom:1px solid var(--color-gray-300);
    padding-bottom:16px;
    margin-bottom:16px;
  }
`
const StoryOpinionWrapper = styled(StoryWrapper)`
  @media ${QUERIES.tabletOnly}{
    flex:1;
    &:not(:last-of-type){
    border-bottom:none;
    padding-bottom: 0;
    margin-bottom:0;
  }
`

const OpinionStoryList = styled(StoryList)`
  @media ${QUERIES.tabletOnly}{
    flex-direction: row;
    gap:16px;
  }
`
  


const OpinionSection = styled.section`
  grid-area: opinion-stories;
  @media ${QUERIES.laptopAndUp}{
    margin-top:-12px;
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;
  @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
  }
`;

export default MainStoryGrid;
