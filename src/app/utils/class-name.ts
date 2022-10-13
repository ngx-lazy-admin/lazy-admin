export const appendClassName = (className: string = '', str: string): string => {
	return className ? removeClassName(className, str) + ' ' + str : str
} 

export const removeClassName = (className: string = '', str: string): string => {
	return className.split(' ')?.filter(item => item != str)?.join(' ')
} 