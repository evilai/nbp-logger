import winston from 'winston';
import expressWinston from 'express-winston';

export default function({ level, colorize }) {
    return new winston.Logger({
        transports: [
            new (winston.transports.Console)({ level, colorize })
        ]
    });
}

export function createExpressLog({ colorize, label = 'HTTP' }) {
    return expressWinston.logger({
        transports: [
            new winston.transports.Console({
                json: false,
                label,
                colorize
            })
        ],
        meta: false,
        msg: '{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}'
    });
};

export function createExpressErrorLog({ colorize }) {
    return expressWinston.errorLogger({
        transports: [
            new winston.transports.Console({
                json: true,
                colorize
            })
        ],
        showStack: true
    });
}
