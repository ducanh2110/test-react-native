// From https://github.com/kirankalyan5/react-native-segmented-control-tab
// Added enabled prop
// Use Material theme Indigo color defaults
// Add propType validation
// Lower opacity for disabled
// Fix border and width issues for Android
import React from "react"
import {
    View,
    ViewPropTypes,
    TouchableOpacity,
    StyleSheet,
    Text,
    Platform
} from "react-native"
import PropTypes from "prop-types"

const handleTabPress = (index, multiple, selectedIndex, onTabPress) => {
    if (multiple) {
        onTabPress(index)
    } else if (selectedIndex !== index) {
        onTabPress(index)
    }
}

const TabOption = ({
                       isTabActive,
                       index,
                       badge,
                       enabled,
                       text,
                       firstTabStyle,
                       lastTabStyle,
                       tabStyle,
                       activeTabStyle,
                       tabTextStyle,
                       activeTabTextStyle,
                       tabBadgeContainerStyle,
                       activeTabBadgeContainerStyle,
                       tabBadgeStyle,
                       activeTabBadgeStyle,
                       onTabPress
                   }) => {
    return (
        <TouchableOpacity
            style={[
                styles.tabStyle,
                tabStyle,
                isTabActive ? [styles.activeTabStyle, activeTabStyle] : {},
                firstTabStyle,
                lastTabStyle,
                enabled ? {} : { opacity: 0.33 }
            ]}
            onPress={() => onTabPress(index)}
            disabled={!enabled}
            activeOpacity={enabled ? 0.33 : 1}
        >
            <View style={{ flexDirection: "row" }}>
                <Text
                    style={[
                        styles.tabTextStyle,
                        tabTextStyle,
                        isTabActive ? [styles.activeTabTextStyle, activeTabTextStyle] : {}
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                >
                    {text}
                </Text>
                {badge ? (
                    <View
                        style={[
                            styles.tabBadgeContainerStyle,
                            tabBadgeContainerStyle,
                            isTabActive
                                ? [
                                    styles.activeTabBadgeContainerStyle,
                                    activeTabBadgeContainerStyle
                                ]
                                : {}
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabBadgeStyle,
                                tabBadgeStyle,
                                isTabActive
                                    ? [styles.activeTabBadgeStyle, activeTabBadgeStyle]
                                    : {}
                            ]}
                        >
                            {badge}
                        </Text>
                    </View>
                ) : (
                    false
                )}
            </View>
        </TouchableOpacity>
    )
}

const SegmentedControlTab = ({
                                 multiple,
                                 selectedIndex,
                                 selectedIndices,
                                 values,
                                 badges,
                                 borderRadius,
                                 tabsContainerStyle,
                                 tabStyle,
                                 activeTabStyle,
                                 tabTextStyle,
                                 activeTabTextStyle,
                                 tabBadgeContainerStyle,
                                 activeTabBadgeContainerStyle,
                                 tabBadgeStyle,
                                 activeTabBadgeStyle,
                                 onTabPress,
                                 enabled
                             }) => {
    const firstTabStyle = [
        {
            borderRightWidth: 0,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius
        }
    ]
    const lastTabStyle = [
        {
            borderLeftWidth: 0,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius
        }
    ]

    return (
        <View
            style={[styles.tabsContainerStyle, tabsContainerStyle]}
            removeClippedSubviews={false}
        >
            {values.map((item, index) => {
                return (
                    <TabOption
                        key={index}
                        index={index}
                        enabled={enabled}
                        badge={badges && badges[index] ? badges[index] : false}
                        isTabActive={
                            multiple
                                ? selectedIndices.includes(index)
                                : selectedIndex === index
                        }
                        text={item}
                        onTabPress={(index) =>
                            handleTabPress(index, multiple, selectedIndex, onTabPress)}
                        firstTabStyle={
                            index === 0 ? [{ borderRightWidth: 0 }, firstTabStyle] : {}
                        }
                        lastTabStyle={
                            index === values.length - 1
                                ? [{ borderLeftWidth: 0 }, lastTabStyle]
                                : {}
                        }
                        tabStyle={[
                            tabStyle,
                            index !== 0 && index !== values.length - 1
                                ? {
                                    //margin: Platform.OS === "android" ? -1 : 0,
                                    borderLeftWidth: Platform.OS === "android" ? 0 : 1,
                                    borderRightWidth: Platform.OS === "android" ? 0 : 1
                                }
                                : {}
                        ]}
                        activeTabStyle={activeTabStyle}
                        tabTextStyle={tabTextStyle}
                        activeTabTextStyle={activeTabTextStyle}
                        tabBadgeContainerStyle={tabBadgeContainerStyle}
                        activeTabBadgeContainerStyle={activeTabBadgeContainerStyle}
                        tabBadgeStyle={tabBadgeStyle}
                        activeTabBadgeStyle={activeTabBadgeStyle}
                    />
                )
            })}
        </View>
    )
}

SegmentedControlTab.propTypes = {
    values: PropTypes.array,
    badges: PropTypes.array,
    enabled: PropTypes.bool,
    multiple: PropTypes.bool,
    onTabPress: PropTypes.func,
    selectedIndex: PropTypes.number,
    selectedIndices: PropTypes.arrayOf(PropTypes.number),
    tabsContainerStyle: ViewPropTypes.style,
    tabStyle: ViewPropTypes.style,
    activeTabStyle: ViewPropTypes.style,
    tabTextStyle: Text.propTypes.style,
    activeTabTextStyle: Text.propTypes.style,
    tabBadgeContainerStyle: Text.propTypes.style,
    activeTabBadgeContainerStyle: Text.propTypes.style,
    tabBadgeStyle: Text.propTypes.style,
    activeTabBadgeStyle: Text.propTypes.style,
    borderRadius: PropTypes.number
}

SegmentedControlTab.defaultProps = {
    values: ["One", "Two", "Three"],
    badges: ["", "", ""],
    multiple: false,
    enabled: true,
    selectedIndex: 0,
    selectedIndices: [0],
    onTabPress() {},
    tabsContainerStyle: {},
    tabStyle: {},
    activeTabStyle: {},
    tabTextStyle: {},
    activeTabTextStyle: {},
    tabBadgeContainerStyle: {},
    activeTabBadgeContainerStyle: {},
    tabBadgeStyle: {},
    activeTabBadgeStyle: {},
    borderRadius: Platform.OS === "ios" ? 5 : 0
}

const styles = StyleSheet.create({
    tabsContainerStyle: {
        backgroundColor: "transparent",
        flexDirection: "row"
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: Platform.OS === "ios" ? "#0076FF" : "#3F51B5",
        borderWidth: 1,
        backgroundColor: "white"
    },
    activeTabStyle: {
        backgroundColor: Platform.OS === "ios" ? "#0076FF" : "#3F51B5"
    },
    tabTextStyle: {
        color: Platform.OS === "ios" ? "#0076FF" : "#3F51B5"
    },
    activeTabTextStyle: {
        color: "white"
    },
    tabBadgeContainerStyle: {
        borderRadius: 20,
        backgroundColor: "red",
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
        marginBottom: 3
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: "white"
    },
    tabBadgeStyle: {
        color: "white",
        fontSize: 11,
        fontWeight: "bold"
    },
    activeTabBadgeStyle: {
        color: "black"
    }
})

export default SegmentedControlTab