import { CLASSPREFIX, STACK } from '../../enums/constants';

export const defaultConfig = {
    classPrefix: CLASSPREFIX,
    defClassName: 'layer-area',
    className: '',
    interpolate: 'linear',
    transform: {
        type: STACK
    },
    interaction: {
        focus: {
            style: {
                // A -0.5
                fill: 'black'
            }
        },
        fade: {
            style: {
                // A -0.5
                fill: 'black'
            }
        }
    },
    crossline: true,
    nearestPointThreshold: 10,
    encoding: {
        color: {},
        x: {},
        y: {},
        y0: {},
        strokeOpacity: {
            value: 1
        },
        fillOpacity: {
            value: 0.5
        }
    },
    transition: {
        effect: 'cubic',
        duration: 1000
    },
    connectNullData: false
};
