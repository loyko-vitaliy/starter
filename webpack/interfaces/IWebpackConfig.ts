import { Configuration } from 'webpack'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface IConfiguration extends Omit<Configuration, 'devServer'> {
  devServer: {
    open: boolean | string
    before(app: any, server: any): void
  }
}

type IWebpackConfig = (env: any, { mode }: { mode: string }) => IConfiguration

export default IWebpackConfig
