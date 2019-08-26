<template>
          <div id="ui" class="ui">

            <!--header start-->
            <Header/>
            <!--header end-->

            <!--sidebar start-->
            <aside id="aside" class="ui-aside">
                <ul class="nav" ui-nav>
                    <li>
                        <a href="index.html"><i class="fa fa-home"></i><span> Dashboard </span></a>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="index.html"><span>Dashboard</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to='/contracts'><i class="fa fa-file-text-o"></i><span> Contracts <small class="label label-warning">Apps</small></span></router-link>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href="note.html"><span>Notes</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to='/invoices'><i class="fa fa-bar-chart-o"></i><span>Invoices</span><i class="fa fa-angle-right pull-right"></i>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href=""><span>Charts</span></a></li>
                            <li><a href="chart-high.html"><span>High Charts</span></a></li>
                            <li><a href="chart-rickshaw.html"><span>Rickshaw Charts</span></a></li>
                            <li><a href="chart-c3.html"><span>C3 Charts</span></a></li>
                            <li><a href="chart-nvd3.html"><span>NVD3 Charts</span></a></li>
                            <li><a href="chart-flot.html"><span>Flot Charts </span></a></li>
                            <li><a href="chart-morris.html"><span>Morris Charts</span></a></li>
                            <li><a href="chartjs.html"><span>ChartJs</span></a></li>
                        </ul>
                        </router-link>
                    </li>
                    <li>
                        <router-link to='/acts'><i class="fa fa-bookmark-o"></i><span>Acts <small class="label label-danger">3</small> </span> <i class="fa fa-angle-right pull-right"></i></router-link>
                        <ul class="nav nav-sub">
                            <li class="nav-sub-header"><a href=""><span>Components</span></a></li>
                            <li><a href="calendar.html"><span>Calendar</span></a></li>
                            <li><a href="timeline.html"><span>Timeline</span></a></li>
                            <li><a href="panels.html"><span>Panels</span></a></li>
                            <li><a href="toastr-notifications.html"><span>Toastr Notifications</span></a></li>
                        </ul>
                    </li>
                </ul>
            </aside>
            <!--sidebar end-->

            <!--main content start-->
            <div id="content" class="ui-content">
                <div class="ui-content-body">

                    <div class="ui-container">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="panel">
                                    <header class="panel-heading">
                                        Panel heading
                                        <span class="tools pull-right">
                                            <a class="refresh-box fa fa-repeat" href="javascript:;"></a>
                                            <a class="collapse-box fa fa-chevron-down" href="javascript:;"></a>
                                            <a class="close-box fa fa-times" href="javascript:;"></a>
                                        </span>
                                    </header>
                                    <div class="panel-body">
                                        <router-view></router-view>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!--right side widget start-->
                    <div class="ui-aside-right " ui-aside-right>

                        <!--customer start-->
                        <div class="aside-widget">
                            <h5>Online Customer</h5>
                            <ul class="contact-list">
                                <li class="online">
                                    <div class="media">
                                        <a href="#" class="pull-left media-thumb">
                                            <img alt="" src="imgs/a0.jpg" class="media-object">
                                            <span class="online"></span>
                                        </a>
                                        <div class="media-body">
                                            <strong>John Doe</strong>
                                            <small>General Manager at TB</small>
                                        </div>
                                    </div><!-- media -->
                                </li>
                                <li class="online">
                                    <div class="media">
                                        <a href="#" class="pull-left media-thumb">
                                            <img alt="" src="imgs/a1.jpg" class="media-object">
                                            <span class="offline"></span>
                                        </a>
                                        <div class="media-body">
                                            <strong>Jonathan Smith</strong>
                                            <small>Lead Designer</small>
                                        </div>
                                    </div><!-- media -->
                                </li>

                                <li class="online">
                                    <div class="media">
                                        <a href="#" class="pull-left media-thumb">
                                            <img alt="" src="imgs/a2.jpg" class="media-object">
                                            <span class="busy"></span>
                                        </a>
                                        <div class="media-body">
                                            <strong>Margarita Rose</strong>
                                            <small>Human Resource Manager</small>
                                        </div>
                                    </div><!-- media -->
                                </li>
                                <li class="online">
                                    <div class="media">
                                        <a href="#" class="pull-left media-thumb">
                                            <img alt="" src="imgs/a0.jpg" class="media-object">
                                            <span class="away"></span>
                                        </a>
                                        <div class="media-body">
                                            <strong>Mr. Kameron De</strong>
                                            <small>Marketing Officer</small>
                                        </div>
                                    </div><!-- media -->
                                </li>
                                <li class="online">
                                    <div class="media">
                                        <a href="#" class="pull-left media-thumb">
                                            <img alt="" src="imgs/a2.jpg" class="media-object">
                                            <span class="offline"></span>
                                        </a>
                                        <div class="media-body">
                                            <strong>Mr. Mosa</strong>
                                            <small>Development Manager</small>
                                        </div>
                                    </div><!-- media -->
                                </li>
                            </ul>
                        </div>
                        <!--customer end-->

                        <!--stock start-->
                        <div class="aside-widget">
                            <h5>Recent Stocks</h5>
                            <table class="table">
                                <tbody>
                                <tr>
                                    <td>DOWJ</td>
                                    <td>19,764.00</td>
                                    <td><small class="label label-success">+ 0.08%</small></td>
                                </tr>
                                <tr>
                                    <td>AAPL</td>
                                    <td>116.90</td>
                                    <td><small class="label label-danger">- 0.29%</small></td>
                                </tr>
                                <tr>
                                    <td>SBUX</td>
                                    <td>50.33</td>
                                    <td><small class="label label-warning">+ 0.23%</small></td>
                                </tr>
                                <tr>
                                    <td>NKE</td>
                                    <td>164.00</td>
                                    <td><small class="label label-success">+ 0.08%</small></td>
                                </tr>
                                <tr>
                                    <td>YHOO</td>
                                    <td>764.00</td>
                                    <td><small class="label label-danger">- 0.91%</small></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!--stock end-->

                        <!--task start-->
                        <div class="aside-widget">
                            <h5>Task Pending</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#">
                                        <div class="task-info">
                                            Wp Development (66%)
                                        </div>
                                        <div class="progress progress-striped">
                                            <div style="width: 66%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="66" role="progressbar" class="progress-bar progress-bar-warning">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="task-info">
                                            Dashboard Design (80%)
                                        </div>
                                        <div class="progress progress-striped">
                                            <div style="width: 80%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-success ">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="task-info">
                                            Marketing (40%)
                                        </div>
                                        <div class="progress progress-striped">
                                            <div style="width: 40%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" role="progressbar" class="progress-bar progress-bar-info">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div class="task-info">
                                            Mobile App Development (33%)
                                        </div>
                                        <div class="progress progress-striped">
                                            <div style="width: 33%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="80" role="progressbar" class="progress-bar progress-bar-danger">
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="text-center">
                                    <a href="#" class="btn btn-sm btn-info btn-block">See All Pending Tasks</a>
                                </li>
                            </ul>
                        </div>
                        <!--task end-->

                    </div>
                    <!--right side widget end-->

                </div>
            </div>
            <!--main content end-->

            <!--footer start-->
            <div id="footer" class="ui-footer">
                2017 &copy; Bootkit by ThemeBucket.
            </div>
            <!--footer end-->

        </div>

</template>

<script>
  import Header from './components/Header'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

