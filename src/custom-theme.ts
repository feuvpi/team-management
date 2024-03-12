/* eslint-disable @typescript-eslint/no-unused-vars */


import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const customTheme: CustomThemeConfig = {
    name: 'custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #37ee27 
		"--color-primary-50": "225 252 223", // #e1fcdf
		"--color-primary-100": "215 252 212", // #d7fcd4
		"--color-primary-200": "205 251 201", // #cdfbc9
		"--color-primary-300": "175 248 169", // #aff8a9
		"--color-primary-400": "115 243 104", // #73f368
		"--color-primary-500": "55 238 39", // #37ee27
		"--color-primary-600": "50 214 35", // #32d623
		"--color-primary-700": "41 179 29", // #29b31d
		"--color-primary-800": "33 143 23", // #218f17
		"--color-primary-900": "27 117 19", // #1b7513
		// secondary | #bdc31e 
		"--color-secondary-50": "245 246 221", // #f5f6dd
		"--color-secondary-100": "242 243 210", // #f2f3d2
		"--color-secondary-200": "239 240 199", // #eff0c7
		"--color-secondary-300": "229 231 165", // #e5e7a5
		"--color-secondary-400": "209 213 98", // #d1d562
		"--color-secondary-500": "189 195 30", // #bdc31e
		"--color-secondary-600": "170 176 27", // #aab01b
		"--color-secondary-700": "142 146 23", // #8e9217
		"--color-secondary-800": "113 117 18", // #717512
		"--color-secondary-900": "93 96 15", // #5d600f
		// tertiary | #8fb16b 
		"--color-tertiary-50": "238 243 233", // #eef3e9
		"--color-tertiary-100": "233 239 225", // #e9efe1
		"--color-tertiary-200": "227 236 218", // #e3ecda
		"--color-tertiary-300": "210 224 196", // #d2e0c4
		"--color-tertiary-400": "177 200 151", // #b1c897
		"--color-tertiary-500": "143 177 107", // #8fb16b
		"--color-tertiary-600": "129 159 96", // #819f60
		"--color-tertiary-700": "107 133 80", // #6b8550
		"--color-tertiary-800": "86 106 64", // #566a40
		"--color-tertiary-900": "70 87 52", // #465734
		// success | #aa4634 
		"--color-success-50": "242 227 225", // #f2e3e1
		"--color-success-100": "238 218 214", // #eedad6
		"--color-success-200": "234 209 204", // #ead1cc
		"--color-success-300": "221 181 174", // #ddb5ae
		"--color-success-400": "196 126 113", // #c47e71
		"--color-success-500": "170 70 52", // #aa4634
		"--color-success-600": "153 63 47", // #993f2f
		"--color-success-700": "128 53 39", // #803527
		"--color-success-800": "102 42 31", // #662a1f
		"--color-success-900": "83 34 25", // #532219
		// warning | #837d78 
		"--color-warning-50": "236 236 235", // #ececeb
		"--color-warning-100": "230 229 228", // #e6e5e4
		"--color-warning-200": "224 223 221", // #e0dfdd
		"--color-warning-300": "205 203 201", // #cdcbc9
		"--color-warning-400": "168 164 161", // #a8a4a1
		"--color-warning-500": "131 125 120", // #837d78
		"--color-warning-600": "118 113 108", // #76716c
		"--color-warning-700": "98 94 90", // #625e5a
		"--color-warning-800": "79 75 72", // #4f4b48
		"--color-warning-900": "64 61 59", // #403d3b
		// error | #26b069 
		"--color-error-50": "222 243 233", // #def3e9
		"--color-error-100": "212 239 225", // #d4efe1
		"--color-error-200": "201 235 218", // #c9ebda
		"--color-error-300": "168 223 195", // #a8dfc3
		"--color-error-400": "103 200 150", // #67c896
		"--color-error-500": "38 176 105", // #26b069
		"--color-error-600": "34 158 95", // #229e5f
		"--color-error-700": "29 132 79", // #1d844f
		"--color-error-800": "23 106 63", // #176a3f
		"--color-error-900": "19 86 51", // #135633
		// surface | #475763 
		"--color-surface-50": "227 230 232", // #e3e6e8
		"--color-surface-100": "218 221 224", // #dadde0
		"--color-surface-200": "209 213 216", // #d1d5d8
		"--color-surface-300": "181 188 193", // #b5bcc1
		"--color-surface-400": "126 137 146", // #7e8992
		"--color-surface-500": "71 87 99", // #475763
		"--color-surface-600": "64 78 89", // #404e59
		"--color-surface-700": "53 65 74", // #35414a
		"--color-surface-800": "43 52 59", // #2b343b
		"--color-surface-900": "35 43 49", // #232b31
		
	}
}

export const fontFamilyBase = '--theme-font-family-base';
export const fontColorBase = '--theme-font-color-base'

