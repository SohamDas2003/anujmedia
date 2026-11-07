"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { musicCatalog, SongEntity } from "@/lib/songsData";

export default function SongsCatalog() {
  const [selectedEntity, setSelectedEntity] = useState<SongEntity | null>(null);

  return (
    <>
      {/* Logos Showcase Grid (Bigger Logos, Smaller & Compact Cards, Distribution & Promotion Focus) */}
      <div className="music-compact-grid">
        {musicCatalog.map((entity) => (
          <div
            key={entity.id}
            className="compact-music-card reveal"
            onClick={() => setSelectedEntity(entity)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedEntity(entity);
              }
            }}
            aria-label={`View distribution details for ${entity.name}`}
            style={{
              ["--card-accent" as string]: entity.accentColor || "var(--signal)",
            }}
          >
            {/* Prominent Large Logo Frame */}
            <div className="compact-logo-stage">
              <Image
                src={entity.logo}
                alt={`${entity.name} logo`}
                width={360}
                height={360}
                className="compact-logo-img"
                priority
              />
              <span className="compact-category-tag">Distributed &bull; Promoted</span>
              <div className="compact-hover-sheen">
                <span>View Distribution Dossier &rarr;</span>
              </div>
            </div>

            {/* Smaller Compact Card Body */}
            <div className="compact-info-pane">
              <div className="compact-header-row">
                <span className="compact-est">{entity.category}</span>
                <span className="compact-stream-counter">{entity.stats.streams}</span>
              </div>

              <h3 className="compact-entity-title">{entity.name}</h3>
              <p className="compact-tagline-text">{entity.distributionRole}</p>

              <div className="compact-hit-line">
                <span className="hit-badge">Promoted Hit</span>
                <span className="hit-song">{entity.featuredSong.title}</span>
              </div>

              <div className="compact-genres-row">
                {entity.genre.slice(0, 2).map((g) => (
                  <span key={g} className="compact-genre-pill">
                    {g}
                  </span>
                ))}
              </div>

              <div className="compact-card-footer">
                <span className="compact-details-link">
                  Campaign Dossier &rarr;
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal Dossier Focused on Distribution & Promotion */}
      {selectedEntity && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedEntity(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              borderTop: `6px solid ${selectedEntity.accentColor || "var(--signal)"}`,
            }}
          >
            <button
              className="modal-close-btn"
              onClick={() => setSelectedEntity(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="modal-hero">
              <div className="modal-logo-wrapper">
                <Image
                  src={selectedEntity.logo}
                  alt={selectedEntity.name}
                  width={220}
                  height={220}
                  className="modal-logo-img"
                />
              </div>
              <div className="modal-title-info">
                <div className="music-badges-row">
                  <span className="entity-badge">Official Distribution &amp; Promotion Partner</span>
                  <span className="year-badge">{selectedEntity.category}</span>
                </div>
                <h2>{selectedEntity.name}</h2>
                <p className="modal-tagline" style={{ color: "var(--signal)", fontWeight: 600 }}>
                  {selectedEntity.distributionRole}
                </p>
                <div className="modal-genres">
                  {selectedEntity.genre.map((g) => (
                    <span key={g} className="genre-chip">
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-stats-grid">
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.streams}</span>
                  <span className="modal-stat-lbl">Promoted Reach</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.releases}</span>
                  <span className="modal-stat-lbl">Distributed Tracks</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.chartPeak}</span>
                  <span className="modal-stat-lbl">Peak Charting</span>
                </div>
                <div className="modal-stat-card">
                  <span className="modal-stat-val">{selectedEntity.stats.listeners}</span>
                  <span className="modal-stat-lbl">Audience Reach</span>
                </div>
              </div>

              <div className="modal-section">
                <h4>Distribution &amp; Promotion Strategy</h4>
                <p className="modal-desc">{selectedEntity.description}</p>
              </div>

              <div className="modal-section">
                <h4>What Anuj Media Manages for This Catalog</h4>
                <div className="modal-track-grid">
                  {selectedEntity.promotionScope.map((scopeItem, idx) => (
                    <div key={idx} className="modal-track-row">
                      <span className="modal-track-idx">&#10003;</span>
                      <span className="modal-track-name">{scopeItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Key Promoted Release</h4>
                <div className="modal-track-card">
                  <div className="modal-track-info">
                    <span className="track-badge">{selectedEntity.featuredSong.badge}</span>
                    <h5 className="modal-track-title">{selectedEntity.featuredSong.title}</h5>
                    <p className="modal-track-artist">
                      Artist: {selectedEntity.featuredSong.artist} &bull; Release Year: {selectedEntity.featuredSong.year} &bull; Promoted Result: {selectedEntity.featuredSong.streams}
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h4>Popular Releases Distributed by Us</h4>
                <div className="modal-track-grid">
                  {selectedEntity.topTracks.map((track, idx) => (
                    <div key={track} className="modal-track-row">
                      <span className="modal-track-idx">0{idx + 1}</span>
                      <span className="modal-track-name">{track}</span>
                      <span className="modal-track-hit">Distributed Single</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h4>Global DSPs &amp; Stores We Distribute To</h4>
                <div className="modal-dist-pills">
                  {selectedEntity.distribution.map((d) => (
                    <span key={d} className="modal-dist-pill">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-cta-box">
                <div>
                  <h5>Want Anuj Media to distribute &amp; promote your songs?</h5>
                  <p>Get your tracks on 150+ streaming platforms with guaranteed viral promotion.</p>
                </div>
                <Link
                  href={`/contact?service=Music%20Marketing&brand=${encodeURIComponent(
                    selectedEntity.name
                  )}`}
                  className="btn btn-signal"
                  onClick={() => setSelectedEntity(null)}
                >
                  Distribute With Us &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
