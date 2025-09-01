import React from 'react';
import { useSpring, animated } from 'react-spring';
import { createUseStyles } from 'react-jss';
import { useHover } from '@uidotdev/usehooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';

const useStyles = createUseStyles({
  '@global': {
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      background: '#f0f2f5',
      color: '#333',
      lineHeight: 1.6,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      fontSmoothing: 'antialiased',
    },
  },
  container: {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '20px 40px',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    borderBottom: '1px solid #eee',
    paddingBottom: '20px',
  },
  name: {
    fontSize: '2.0rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    alignSelf: 'flex-start',
    textAlign: 'left'
  },
  contact: {
    fontSize: '1rem',
    color: '#666',
  },
  contactIcon: {
    margin: '0 5px',
    fontSize: '1.2rem',
    color: '#666',
    '&:hover': {
      color: '#0056b3',
    },
  },
  section: {
    marginBottom: '35px',
  },
  sectionTitle: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#0056b3',
    borderBottom: '2px solid #0056b3',
    paddingBottom: '8px',
    marginBottom: '20px',
  },
  listItem: {
    marginBottom: '12px',
    '& strong': {
      color: '#444',
    },
  },
  itemHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  itemTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  itemDate: {
    color: '#555',
    fontWeight: 'normal',
    fontSize: '0.95rem',
  },
  icon: {
    width: '24px',
    height: '24px',
    marginRight: '12px',
  },
  subHeader: {
    fontSize: '1rem',
    color: '#4a4a4a',
    marginBottom: '15px',
  },
  description: {
    paddingLeft: '20px',
    listStylePosition: 'outside',
    '& li': {
      marginBottom: '8px',
    },
  },
  card: {
    padding: '20px',
    borderRadius: '10px',
    background: '#ffffff',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    border: '1px solid #e8e8e8',
    willChange: 'transform',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontSmoothing: 'antialiased',
  },
});

const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  const classes = useStyles();
  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    transformOrigin: 'center center',
    config: { mass: 1, tension: 200, friction: 30 },
  }));

  const [hoverRef, hovering] = useHover();

  React.useEffect(() => {
    set({
      transform: hovering ? 'scale(1.03)' : 'scale(1)',
      boxShadow: hovering
        ? '0 10px 30px rgba(0,0,0,0.15)'
        : '0 4px 12px rgba(0,0,0,0.08)',
    });
  }, [hovering, set]);

  return (
    <animated.div ref={hoverRef} style={props} className={classes.card}>
      {children}
    </animated.div>
  );
};

// 主简历组件
const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.name}>Songrujia</h1>
        <p className={classes.contact}>
          <a href="mailto:baishuibeef@gmail.com" className={classes.contactIcon}><FontAwesomeIcon icon={faEnvelope} />baishuibeef@gmail.com</a> |
          <a href="https://github.com/scarletborder" className={classes.contactIcon}><FontAwesomeIcon icon={faGithub} />scarletborder</a> |
          <a href="https://blog.scarletborder.cn" className={classes.contactIcon}><FontAwesomeIcon icon={faBlogger} />绯境之外</a>
        </p>
      </header>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>技术栈</h2>
        <AnimatedCard>
          <ul>
            <li className={classes.listItem}>
              <strong>后端：</strong>
              <ul>
                <li><strong>掌握</strong> Golang 和 Python，可独立承担服务端应用的设计与开发。</li>
                <li><strong>掌握</strong> PostgreSQL、SQLite3 数据库，并能熟练运用 ORM 进行数据交互。</li>
                <li><strong>了解</strong> Golang 微服务框架，可参与相关项目的开发与维护。</li>
              </ul>
            </li>
            <li className={classes.listItem}>
              <strong>前端与客户端：</strong>
              <ul>
                <li><strong>掌握</strong> React、TypeScript、HTML 技术栈，能够独立开发 Web 应用。</li>
                <li><strong>掌握</strong> React Native 及 Expo 框架，具备跨平台移动端应用的开发能力。</li>
              </ul>
            </li>
            <li className={classes.listItem}>
              <strong>开发与工具：</strong>
              <ul>
                <li><strong>掌握</strong> 使用 GitHub Actions 设计并实现 CI/CD 自动化流程。</li>
                <li><strong>了解</strong> Linux 环境常用命令。</li>
                <li><strong>熟练</strong> 运用 AI 编程辅助工具（如 GitHub Copilot）提升开发效率。</li>
              </ul>
            </li>
          </ul>
        </AnimatedCard>
      </section>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>教育经历</h2>
        <AnimatedCard>
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>
              <img src="/whu.svg" alt="武汉大学校徽" className={classes.icon} />
              武汉大学，本科
            </span>
            <span className={classes.itemDate}>2022.09 ~ 至今</span>
          </div>
          <div className={classes.subHeader}>主修专业 信息安全 GPA 3.79/4.0</div>
        </AnimatedCard>
      </section>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>工作经历</h2>
        <AnimatedCard>
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>
              <img src="/billing.png" alt="腾讯TEG" className={classes.icon} />
              腾讯
            </span>
            <span className={classes.itemDate}>2025.06 ~ 至今</span>
          </div>
          <div className={classes.subHeader}>腾讯TEG计费平台部增值应用组前端开发实习生</div>
          <ul className={classes.description}>
            <li>
              <strong>项目背景：</strong> 为实现根据用户单句指令或设计稿，自动化生成完整前后端代码的目标，参与研发了基于大语言模型（LLM）的全栈应用生成平台。
            </li>
            <li>
              <strong>负责内容：</strong>
              <ul>
                <li>参与前端代码生成流程的工程化与质量优化工作。实现国际化UI的自动适配（从中英文混杂到可自动调节国际化UI）、优化组件加载策略以提高首屏加载速度(14秒-&gt;小于1秒)， 建立Codebase index以优化黄金上下文寻找。</li>
                <li>参与设计并开发基于多工具Agent的指令微调系统。行动包括：设计Agent工具调用机制、开发指令精确编辑逻辑，提升代码生成的可控性与灵活性。</li>
              </ul>
            </li>
          </ul>
        </AnimatedCard>
      </section>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>在校奖项</h2>
        <AnimatedCard>
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>2025年网络技术挑战赛 A-ST赛项 全国三等奖</span>
            <span className={classes.itemDate}>2025.08</span>
          </div>
          <p>本人担任客户端设计开发以及后端部分逻辑, 存储开发</p>
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>计算机设计大赛 中南赛区2025年省级赛二等奖</span>
            <span className={classes.itemDate}>2025.06</span>
          </div>
          <p>本人担任客户端设计以及部分后端交互开发</p>
          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '15px 0' }} />
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>第15届 蓝桥杯 Python程序设计 湖北赛区二等奖</span>
            <span className={classes.itemDate}>2024.04</span>
          </div>
          <p>该认证为算法设计能力认证。</p>
        </AnimatedCard>
      </section>

      <section className={classes.section}>
        <h2 className={classes.sectionTitle}>个人项目经历</h2>
        <AnimatedCard>
          <div className={classes.itemHeader}>
            <span className={classes.itemTitle}>私密图纸音乐房间</span>
            <span className={classes.itemDate}>2025.01 - 2025.02</span>
          </div>
          <ul className={classes.description}>
            <li>
              客户端开发：
              <ul>
                <li>采用 Expo 框架进行跨平台开发，实现一套代码库同时支持 Web 及 Android 应用。</li>
                <li>通过 React Native 构建用户界面，实现了响应式布局，以自动适配不同设备屏幕，并原生支持深色模式。</li>
                <li>根据用户环境（Web/Android App）执行不同的交互逻辑，优化了特定平台下的用户体验。</li>
              </ul>
            </li>
            <li>
              后端开发与数据处理：
              <ul>
                <li>后端服务采用 Golang 及 go-fiber 网络框架进行构建。</li>
                <li>为解决服务器硬件资源有限的问题，设计并实现了内存与磁盘两级缓存机制，用于加速音频资源的获取与响应。</li>
                <li>客户端与服务端之间通过 WebSocket 协议进行全双工通信。</li>
              </ul>
            </li>
            <li>
              核心功能与技术实现：
              <ul>
                <li>整合了包括网易云音乐、哔哩哔哩、YouTube 在内的多平台音视频数据源。</li>
                <li>为支持哔哩哔哩的音频流获取，参与了相关视频资源解析的 Go SDK 的逆向工程与开发工作。</li>
              </ul>
            </li>
          </ul>
        </AnimatedCard>
      </section>
    </div>
  );
};

export default App;