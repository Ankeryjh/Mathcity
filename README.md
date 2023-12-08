# 智慧城市数字大屏项目

![项目演示图](https://github.com/Ankeryjh/Mathcity/blob/master/src/assets/img/show.png)

## 项目简介

智慧城市数字大屏项目整合了多种技术，包括Vue、ECharts、Element UI Plus，以及后端使用了Node.js和MySQL等。前端特效利用了 ECharts 和 Element UI Plus，快速集成了前端表格数据的布局和交互。

## 技术栈

- **前端：** Vue、ECharts、Element UI Plus
- **后端：** Node.js、Express
- **数据库：** MySQL
- **3D 模型和动画：** Unity、Blender

## 主要功能

- 展示城市水电等物资供给数据
- 交互式展现城市就业信息
- 实时监控城市交通状况
- 显示路灯状态和能耗信息
- 呈现城市排水系统运行情况

## 安装和运行

### 安装步骤

1. 克隆仓库:

    ```bash
    git clone https://github.com/Ankeryjh/Mathcity.git
    ```

2. 进入项目目录:

    ```bash
    cd Mathcity
    ```

3. 安装前端依赖:

    ```bash
    npm install
    ```

4. 进入 `class_back` 目录:

    ```bash
    cd class_back
    ```

5. 安装后端依赖:

    ```bash
    npm install
    ```

6. 配置后端数据库连接信息:

    - 打开 `class_back/db.js`
    - 替换以下内容为你自己的数据库账号密码和数据库名：

    ```javascript
    const mysql = require('mysql');

    exports.base = (sql, data, callback) => {
        const connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'your-username',
            password: 'your-password',
            database: 'your-database'
        });

        connection.connect();

        connection.query(sql, data, function (error, results, fields) {
            if (error) throw error;
            callback(results, error);
        });

        connection.end();
    };
    ```



8. 启动前端应用:

    ```bash
    npm run serve
    ```

9. 在另一个终端中进入 `class_back` 目录:

    ```bash
    cd class_back
    ```

10. 启动后端:

    ```bash
    node index.js
    ```

### 运行程序时的注意事项

- 确保你的数据库已经启动。
- 确保正确连接到了你自己的数据库。

## 项目结构

描述项目目录结构，重点突出主要文件和文件夹。

## 示例用法

提供关于如何使用项目的简单示例或说明。


## 报告问题

如果您发现任何问题，请在 [问题页面](https://github.com/Ankeryjh/Mathcity/issues) 报告。

