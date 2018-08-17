import { getUniqueId } from 'muze-utils';
import { CLASSPREFIX } from '../enums/constants';

/**
 *
 *
 */
export const defaultConfig = {
    id: getUniqueId(),
    axisName: {
        defClassName: 'axis-name',
    },
    axisNamePadding: 12,
    classPrefix: CLASSPREFIX,
    className: `${CLASSPREFIX}-axis`,
    exponent: 1,
    interpolator: 'linear',
    fixedBaseline: true,
    labels: {
        rotation: 0,
        smartTicks: false,
    },
    orientation: 'left',
    maxHeight: 30,
    maxWidth: 30,
    numberFormat: val => val,
    padding: 0.3,
    nice: true,
    numberOfTicks: 10,
    rotate: false,
    show: true,
    showAxisName: false,
    showInnerTicks: null,
    showOuterTicks: null,
    style: {},
    type: 'linear',
    tickFormat: null,
    tickValues: null,
    xOffset: undefined,
    yOffset: undefined
};

