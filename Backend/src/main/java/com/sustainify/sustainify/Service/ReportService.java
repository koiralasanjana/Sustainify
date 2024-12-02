package com.sustainify.sustainify.Service;

import com.sustainify.sustainify.Model.Report;
import com.sustainify.sustainify.Repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportService {

    @Autowired
    private ReportRepository reportRepository;

    public Report submitReport(Report report) {
        return reportRepository.save(report);
    }

    public List<Report> getAllReports() {
        return reportRepository.findAll();
    }

    public Report updateReportStatus(Long id, String status) throws Exception {
        Report report = reportRepository.findById(id)
                .orElseThrow(() -> new Exception("Report not found"));
        report.setStatus(status);
        return reportRepository.save(report);
    }
}
