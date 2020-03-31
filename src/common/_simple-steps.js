import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Header, Text } from 'components/elements'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`
const StyledFlex = styled(Flex)`
    margin: 6rem 0 0 0;

    @media ${device.tabletL} {
        margin: 0;

        article:first-child {
            margin-top: 2rem;
        }
    }
`
const ClientCard = styled.article`
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    width: 28.2rem;
    padding: 3.2rem;
    height: 100%;
    min-height: 22rem;
    margin: ${(props) => (props.m ? props.m : '')};
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;

    ${Header} {
        padding-bottom: 1.6rem;

        @media ${device.tabletL} {
            font-size: 2rem;
            padding-bottom: 1rem;
        }
    }

    @media (max-width: 1185px) {
        margin: 2rem;
        order: ${(props) => (props.order ? props.order : '')};
    }
    @media ${device.tabletL} {
        width: 100%;
        margin-top: 0;
        padding: 2rem;
    }

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);

        svg > g > path:nth-child(2) {
            fill: var(--color-red);
        }
    }
`

const SimpleSteps = ({ header, content, component }) => (
    <StyledSection>
        <Container direction="column">
            <Header align="center" size="var(--text-size-header-1)" as="h2">
                {header}
            </Header>
        </Container>
        <StyledFlex wrap="wrap">
            {content.map((item, idx) => {
                return (
                    <ClientCard key={idx} m="0 0 0 2rem">
                        <Flex ai="center">
                            <Header as="h4">{item.header}</Header>
                            {item.icon}
                        </Flex>
                        <Text>{item.text}</Text>
                    </ClientCard>
                )
            })}
        </StyledFlex>
        {component}
    </StyledSection>
)
SimpleSteps.propTypes = {
    component: PropTypes.object,
    content: PropTypes.object.isRequired,
    header: PropTypes.string.isRequired,
}
export default SimpleSteps
