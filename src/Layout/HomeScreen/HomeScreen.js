import {Text, View} from "react-native";
import {Card, CardItem, Content, Icon, Right, Spinner} from 'native-base'
import React from "react";
import {ScrollableTabBar, ScrollableTabView} from '@valdio/react-native-scrollable-tabview';
import axios from "axios";
import {API_SERVER} from "../../config/config";
import Loader from "../../Components/Loader";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            data: [],
            numberOfPage: [],
            loading: false
        }
        this.getDefaultPageAndPagination = this.getDefaultPageAndPagination.bind(this);
    }

    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };

    componentDidMount() {
        this.getDefaultPageAndPagination()
    }

    convertNumberToArray = (number) => {
        let pages = [];
        for (let i = 1; i <= number; i++) {
            const page = 'Page ' + i;
            pages.push(page)
        }
        return pages;
    };

    getDefaultPageAndPagination = (page) => {
        const url = API_SERVER + '/get_all_api_statistic/page/' + (!!page ? page : 0);
        this.setState({loading: true}, () => {
            axios.request({
                url: url,
                method: 'GET',
                params: {
                    businessId: 4,
                    businessName: 'sas'
                }
            }).then(({data, headers, status}) => {
                if (status === 200) {
                    this.setState({numberOfPage: this.convertNumberToArray(data.number_page)});
                    this.setState({data: data.data}, () => {
                        this.setState({loading: false})
                    })
                }
            }).catch((error) => {
                if (!!error.response) {
                    alert(error.response.data.error)
                }
            })
        })
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={{flex: 1}}>
                <Loader loading={this.state.loading}/>
                <ScrollableTabView
                    style={{marginTop: 20}}
                    initialPage={0}
                    renderTabBar={() => <ScrollableTabBar/>}
                    onChangeTab={(i) => {
                        this.getDefaultPageAndPagination(i.i)
                    }}
                >
                    {this.state.numberOfPage.map(i => {
                       return <Content tabLabel={i}>
                            <Card>
                                {this.state.data.map(server => {
                                    return (<CardItem bordered button onPress={() => {
                                        navigate('DetailPage')
                                    }}>
                                        <Icon active name="desktop"/>
                                        <Text>{server.apiName}</Text>
                                        <Right>
                                            <Icon name="arrow-forward"/>
                                        </Right>
                                    </CardItem>)
                                })}
                            </Card>
                        </Content>
                    })}
                </ScrollableTabView>

            </View>
        );
    }
}

